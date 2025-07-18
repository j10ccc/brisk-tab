import Head from "next/head";
import { ReactElement, useMemo } from "react";

import BookmarkGroupView from "@/components/bookmark-group-view";
import EditBookmarkModal from "@/components/edit-bookmark-modal";
import EmptyPlaceholder from "@/components/empty-placeholder";
import GlobalSearch from "@/components/global-search";
import useBookmarkGroups from "@/hooks/use-bookmark-groups";
import useBookmarks from "@/hooks/use-bookmarks";
import { useEditBookmarkModal } from "@/hooks/use-edit-bookmark-modal";
import DefaultLayout from "@/layouts/default";

import { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  const { bookmarks, updateBookmarks, removeBookmarks } = useBookmarks();
  const { groups } = useBookmarkGroups();
  const { isOpenBookmarkModal, toEditBookmark, closeEditBookmarkModal } =
    useEditBookmarkModal();

  const contentfulGroups = useMemo(() => {
    return groups.filter((group) => group.bookmarks.length > 0);
  }, [groups]);

  return (
    <section className="px-8 flex flex-col h-full overflow-x-auto">
      {bookmarks.length === 0 ? (
        <EmptyPlaceholder
          title="No bookmarks"
          desc="You can import bookmarks from browser or create a new one."
        />
      ) : (
        contentfulGroups.map((group) => (
          <BookmarkGroupView key={group.name} group={group} />
        ))
      )}
      <GlobalSearch />
      <EditBookmarkModal
        key={`${toEditBookmark?.groupId}-${toEditBookmark?.url}`}
        isOpen={isOpenBookmarkModal}
        onClose={closeEditBookmarkModal}
        onUpdate={(newBookmark) => {
          if (toEditBookmark) {
            updateBookmarks(newBookmark, toEditBookmark);
          }
          closeEditBookmarkModal();
        }}
        onRemove={() => {
          if (toEditBookmark) {
            removeBookmarks(toEditBookmark);
          }
          closeEditBookmarkModal();
        }}
        bookmark={toEditBookmark}
      />
    </section>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Brisk Tab</title>
        <meta name="description" content="An alt blank page for your browser" />
      </Head>
      <DefaultLayout>{page}</DefaultLayout>
    </>
  );
};

export default HomePage;
