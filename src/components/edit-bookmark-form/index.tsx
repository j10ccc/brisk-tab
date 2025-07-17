import { ChangeEvent, useImperativeHandle, useState } from "react";

import useBookmarkGroups from "@/hooks/use-bookmark-groups";
import { Bookmark } from "@/types";
import Input from "@/ui/input";
import Select from "@/ui/select";

export interface EditBookmarkFormRef {
  getFormData: () => Bookmark;
}

interface EditBookmarkFormProps {
  bookmark?: Bookmark;
  ref: React.Ref<EditBookmarkFormRef>;
}

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

  useImperativeHandle(ref, () => ({
    getFormData: () => ({
      name,
      url,
      groupId
    })
  }));

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
