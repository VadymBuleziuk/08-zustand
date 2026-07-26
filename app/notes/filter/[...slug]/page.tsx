import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import Notes from "./Notes.client";
import { fetchNotes } from "@/lib/api";

interface NoteDetailsProps {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{
    page?: string;
    query?: string;
    perPage?: number;
  }>;
}

const NotesDetails = async ({ searchParams, params }: NoteDetailsProps) => {
  const paramsSearch = await searchParams;

  const page = Number(paramsSearch.page) || 1;
  const query = paramsSearch.query ?? "";
  const perPage = 12;
  const { slug } = await params;
  const tag = slug[0] === "all" ? undefined : slug[0];
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", query, page, tag],
    queryFn: () => fetchNotes(query, page, perPage, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Notes initialPage={page} initialQuery={query} tag={tag} />
    </HydrationBoundary>
  );
};

export default NotesDetails;
