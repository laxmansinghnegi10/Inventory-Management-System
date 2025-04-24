import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Button from '../ui/Button';

export default function TablePagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
      <div className="flex-1 flex justify-between sm:hidden">
        <Button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing page <span className="font-medium">{currentPage}</span> of{' '}
            <span className="font-medium">{totalPages}</span>
          </p>
        </div>
        <div className="flex space-x-2">
          <Button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            variant="outline"
          >
            First
          </Button>
          <Button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            variant="outline"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            variant="outline"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            variant="outline"
          >
            Last
          </Button>
        </div>
      </div>
    </div>
  );
}