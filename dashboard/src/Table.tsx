import styles from './Table.module.css';

export interface TableColumn<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], item: T) => React.ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  onRowClick?: (item: T) => void;
}

export function Table<T extends Record<string, any>>({ data, columns, onRowClick }: TableProps<T>) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.header}>
            {columns.map((col) => (
              <th key={col.key as string}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr 
              key={index} 
              className={styles.row}
              onClick={() => onRowClick?.(item)}
            >
              {columns.map((col) => (
                <td key={col.key as string} className={styles.cell}>
                  {col.render ? col.render(item[col.key], item) : item[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
