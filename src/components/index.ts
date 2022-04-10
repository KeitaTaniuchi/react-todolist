export type ToDo = {
  id: number;
  task: string;
  status: Status['label'];
};

export type Status = {
  label: '全て' | '作業中' | '完了';
  value: 'all' | 'inWork' | 'completed';
};
