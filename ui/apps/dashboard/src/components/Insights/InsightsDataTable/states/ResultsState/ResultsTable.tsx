import { memo, useCallback } from 'react';
import { Table } from '@inngest/components/Table';
import type { ColumnDef } from '@tanstack/react-table';

<<<<<<< HEAD
import {
  useCellDetailContext,
  type SelectedCellCoords,
} from '@/components/Insights/CellDetailContext';
=======
import { useCellDetailContext } from '@/components/Insights/CellDetailContext';
>>>>>>> 18e872648 (updated data tabel to fix the table column issue, added cell detail sidebar, removed query history from the sidebar)
import { useInsightsStateMachineContext } from '@/components/Insights/InsightsStateMachineContext/InsightsStateMachineContext';
import type { InsightsFetchResult } from '@/components/Insights/InsightsStateMachineContext/types';
import { ResultsTableFooter, assertData } from './ResultsTableFooter';
import { useColumns } from './useColumns';

type InsightsEntry = InsightsFetchResult['rows'][number];
type InsightsColumnValue = InsightsEntry['values'][string];
type InsightsTableProps = {
  cellClassName: string;
  columns: ColumnDef<InsightsEntry, InsightsColumnValue>[];
  data: InsightsEntry[];
  onCellClick?: (rowIndex: number, columnId: string, value: unknown) => void;
<<<<<<< HEAD
  selectedCell?: SelectedCellCoords | null;
=======
>>>>>>> 18e872648 (updated data tabel to fix the table column issue, added cell detail sidebar, removed query history from the sidebar)
};

function InsightsTable({
  cellClassName,
  columns,
  data,
  onCellClick,
<<<<<<< HEAD
  selectedCell,
=======
>>>>>>> 18e872648 (updated data tabel to fix the table column issue, added cell detail sidebar, removed query history from the sidebar)
}: InsightsTableProps) {
  return (
    <Table<InsightsEntry>
      cellClassName={cellClassName}
      columns={columns}
      data={data}
      enableColumnSizing
<<<<<<< HEAD
      selectedCell={selectedCell}
=======
>>>>>>> 18e872648 (updated data tabel to fix the table column issue, added cell detail sidebar, removed query history from the sidebar)
      onCellClick={onCellClick}
    />
  );
}

const MemoizedInsightsTable = memo(InsightsTable);

export function ResultsTable() {
  const { data } = useInsightsStateMachineContext();
  const { columns } = useColumns(data);
<<<<<<< HEAD
  const { openCellDetail, selectedCellCoords } = useCellDetailContext();
=======
  const { openCellDetail } = useCellDetailContext();
>>>>>>> 18e872648 (updated data tabel to fix the table column issue, added cell detail sidebar, removed query history from the sidebar)

  const handleCellClick = useCallback(
    (rowIndex: number, columnId: string, value: unknown) => {
      if (!data) return;
      const col = data.columns.find((c) => c.name === columnId);
      openCellDetail({
        rowIndex,
        columnId,
        columnName: columnId,
        columnType: col?.type ?? 'string',
        value: value as string | number | Date | null,
      });
    },
    [data, openCellDetail],
  );

  if (!assertData(data)) return null;

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div
        className="flex-1 overflow-auto overscroll-none"
        id="insights-table-container"
      >
        <MemoizedInsightsTable
          cellClassName="[&:not(:first-child)]:border-l [&:not(:first-child)]:border-light box-border align-top px-4 py-2.5 overflow-hidden text-ellipsis whitespace-nowrap"
          columns={columns}
          data={data.rows}
          onCellClick={handleCellClick}
<<<<<<< HEAD
          selectedCell={selectedCellCoords}
=======
>>>>>>> 18e872648 (updated data tabel to fix the table column issue, added cell detail sidebar, removed query history from the sidebar)
        />
      </div>
      <ResultsTableFooter />
    </div>
  );
}
