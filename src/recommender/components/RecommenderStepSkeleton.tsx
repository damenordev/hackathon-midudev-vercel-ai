export const RecommenderStepSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="w-1/2 bg-popover animate-pulse h-6 rounded-lg" />
          <div className="w-1/4 bg-popover animate-pulse h-3 rounded-lg" />
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="rounded-lg bg-popover animate-pulse h-20" />
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <div className="w-[150px] bg-popover animate-pulse h-10 rounded-lg" />
      </div>
    </div>
  )
}
