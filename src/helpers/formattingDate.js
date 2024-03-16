import { formatDistanceToNow } from 'date-fns';

export function formattingDistanceToNow(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
