export default function findIndexById<T extends { id: string }>(array: T[], id: string): number {
  return array.findIndex((elementWithId) => elementWithId.id === id);
}
