export type ToDo = {
  id: number;
  task: string;
  status: StatusEn;
};

export type StatusEn = 'all' | 'inWork' | 'completed';

export type StatusJp = '全て' | '作業中' | '完了';
