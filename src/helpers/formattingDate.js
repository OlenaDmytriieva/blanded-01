import { formatDistanceToNow, format } from 'date-fns';

export function formattingDistanceToNow(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formattingData(date) {
  return format(new Date(date), 'Pp');
}
