import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
export interface PaginationProps {
  totalPages?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (page: number) => void;
}
function getPageItems(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) {
    return Array.from(
      {
        length: total
      },
      (_, i) => i + 1
    );
  }
  const items: (number | 'ellipsis')[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) items.push('ellipsis');
  for (let i = start; i <= end; i++) items.push(i);
  if (end < total - 1) items.push('ellipsis');
  items.push(total);
  return items;
}
export function Pagination({
  totalPages = 15,
  value,
  defaultValue = 1,
  onChange
}: PaginationProps) {
  const isControlled = value !== undefined;
  const [internalPage, setInternalPage] = useState(defaultValue);
  const currentPage = isControlled ? value! : internalPage;
  const goTo = (page: number) => {
    const next = Math.min(totalPages, Math.max(1, page));
    if (next === currentPage) return;
    if (!isControlled) setInternalPage(next);
    onChange?.(next);
  };
  const items = getPageItems(currentPage, totalPages);
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;
  const baseBtn =
  'inline-flex h-9 min-w-9 items-center justify-center rounded-md px-2.5 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6B4F] focus-visible:ring-offset-2';
  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className="flex w-full justify-center">
      
      <ul className="flex items-center gap-1">
        <li>
          <button
            type="button"
            onClick={() => goTo(currentPage - 1)}
            disabled={isFirst}
            aria-label="Go to previous page"
            className={`${baseBtn} gap-1 pl-2 pr-3 text-[#10281D] hover:bg-[#10281D]/5 ${isFirst ? 'cursor-not-allowed opacity-40' : ''}`}>
            
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>
        </li>

        {items.map((item, i) =>
        item === 'ellipsis' ?
        <li key={`ellipsis-${i}`}>
              <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center text-[#10281D]/40">
            
                <MoreHorizontal className="h-4 w-4" />
              </span>
            </li> :

        <li key={item}>
              <button
            type="button"
            onClick={() => goTo(item)}
            aria-current={currentPage === item ? 'page' : undefined}
            aria-label={`Go to page ${item}`}
            className={`${baseBtn} ${currentPage === item ? 'bg-[#2F6B4F] text-white shadow-sm hover:bg-[#23523c]' : 'text-[#10281D] hover:bg-[#10281D]/5'}`}>
            
                {item}
              </button>
            </li>

        )}

        <li>
          <button
            type="button"
            onClick={() => goTo(currentPage + 1)}
            disabled={isLast}
            aria-label="Go to next page"
            className={`${baseBtn} gap-1 pl-3 pr-2 text-[#10281D] hover:bg-[#10281D]/5 ${isLast ? 'cursor-not-allowed opacity-40' : ''}`}>
            
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </li>
      </ul>
    </nav>);

}