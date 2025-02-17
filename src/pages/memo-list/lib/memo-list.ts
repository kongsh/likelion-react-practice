import { MemoItem } from '../types';
import { supabase } from './supabase-client';

const DATABASE_NAME = 'memo-list';

interface QueryOptions {
  columns?: string;
  from?: number;
  to?: number;
}

export const getMemoList = async ({
  columns = '*',
  from = 0,
  to = 10,
}: QueryOptions = {}) => {
  return await supabase
    .from(DATABASE_NAME)
    .select(columns)
    .range(from, to)
    .returns<MemoItem[]>();
};

export const getMemoItemById = async (id: MemoItem['id']) => {
  return await supabase
    .from(DATABASE_NAME)
    .select(`*`)
    .eq('id', id)
    .returns<MemoItem[]>();
};
