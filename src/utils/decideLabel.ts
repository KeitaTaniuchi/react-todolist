import { StatusEn, StatusJp } from 'types/index';

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
