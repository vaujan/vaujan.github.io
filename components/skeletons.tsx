import { Skeleton } from "@/components/ui/skeleton";

export function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="aspect-[4/3] w-full rounded-lg" />
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-2">
          <Skeleton className="h-5 w-3/5" />
          <Skeleton className="h-4 w-12" />
        </div>
        <Skeleton className="h-4 w-1/3" />
      </div>
    </div>
  );
}

export function ProjectDetailSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      <Skeleton className="aspect-video w-full rounded-lg" />
      <div className="flex flex-col gap-4">
        <Skeleton className="h-8 w-3/4" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-28 rounded-full" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[95%]" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[85%]" />
      </div>
    </div>
  );
}

export function HomeProjectsSkeleton() {
  return (
    <div className="flex flex-col">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i}>
          <div className="flex w-full flex-col gap-1 py-5 md:flex-row md:items-baseline md:justify-between md:gap-8 md:px-3">
            <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:gap-3">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-4 w-12" />
          </div>
          {i < 2 && <div className="h-px w-full bg-border opacity-50" />}
        </div>
      ))}
    </div>
  );
}
