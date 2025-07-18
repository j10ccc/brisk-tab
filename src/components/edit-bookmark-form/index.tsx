import { ChangeEvent, useCallback, useImperativeHandle, useState } from "react";
import z4 from "zod/v4";

import useBookmarkGroups from "@/hooks/use-bookmark-groups";
import { Bookmark } from "@/types";
import Input from "@/ui/input";
import Select from "@/ui/select";

export interface EditBookmarkFormRef {
  getFormData: () => Bookmark;
  validate: () => string | undefined;
}

interface EditBookmarkFormProps {
  bookmark?: Bookmark;
  ref: React.Ref<EditBookmarkFormRef>;
}

const formDataSchema = z4.object({
  name: z4.string().trim().nonempty({ error: "Bookmark name is required" }),
  url: z4.url({
    protocol: /^https?$/,
    hostname: z4.regexes.domain,
    error: "Bookmark URL is invalid"
  }),
  groupId: z4.string().nonempty({ error: "Bookmark group is required" })
});

export default function EditBookmarkForm({
  bookmark,
  ref
}: EditBookmarkFormProps) {
  const [name, setName] = useState(bookmark?.name ?? "");
  const [url, setUrl] = useState(bookmark?.url ?? "");
  const { groups } = useBookmarkGroups();
  // TODO: default use recent used group
  const [groupId, setGroupId] = useState(bookmark?.groupId ?? groups[0].id);

  const handleSelectGroup = (ev: ChangeEvent<HTMLSelectElement>) => {
    const id = ev.target.value;
    const target = groups.find((item) => item.id === id);
    if (target) {
      setGroupId(target.id);
    }
  };

  const handleGetFormData = useCallback(() => {
    return {
      name,
      url,
      groupId
    };
  }, [name, url, groupId]);

  const handleValidate = useCallback(() => {
    const result = formDataSchema.safeParse({
      name,
      url,
      groupId
    });
    if (!result.success) {
      return result.error.issues.at(0)?.message;
    }
  }, [name, url, groupId]);

  useImperativeHandle(
    ref,
    () => ({
      getFormData: handleGetFormData,
      validate: handleValidate
    }),
    [handleGetFormData, handleValidate]
  );

  return (
    <>
      <Input
        field="name"
        label="Bookmark name"
        placeholder="A cool website"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        field="url"
        label="Bookmark URL"
        placeholder="http://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Select
        field="group"
        label="Select a group"
        options={groups.map((item) => ({
          label: item.name,
          value: item.id
        }))}
        value={groupId}
        onChange={handleSelectGroup}
      />
    </>
  );
}
