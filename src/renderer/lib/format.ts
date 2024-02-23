export const formatDate = (date: Date): string => {
  const ymd = date.toLocaleDateString('sv-SE');
  const time = date.toLocaleTimeString('ja-JP', { hour12: false });

  return `${ymd} ${time}`;
};
