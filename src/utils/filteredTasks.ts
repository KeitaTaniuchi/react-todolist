import { StatusEn } from 'types/StatusEn';
import { ToDo } from 'types/ToDo';

export const filteredTasks = (tasks: ToDo[], status: StatusEn): ToDo[] => {
  switch (status) {
    case 'all':
      return tasks;
    case 'inWork':
      return tasks.filter((value) => value.status === 'inWork');
    case 'completed':
      return tasks.filter((value) => value.status === 'completed');
  }
};
