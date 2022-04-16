import { StatusEn } from 'types/StatusEn';

type StatusJp = '全て' | '作業中' | '完了';

export const decideLabel = (status: StatusEn): StatusJp => {
  switch (status) {
    case 'all':
      return '全て';
    case 'inWork':
      return '作業中';
    case 'completed':
      return `完了`;
  }
};
