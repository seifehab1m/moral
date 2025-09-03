type Result<T> = [T, null] | [null, Error];

export async function safeTry<T>(fn: () => Promise<T>): Promise<Result<T>> {
  try {
    return [await fn(), null];
  } catch (err) {
    console.error(err);
    return [null, err instanceof Error ? err : new Error(String(err))];
  }
}
