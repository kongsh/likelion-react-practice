import { createClient } from '@supabase/supabase-js';
import {
  Database,
  Tables,
  TablesInsert,
  TablesUpdate,
} from './memo-list.schema';

const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = import.meta.env;

export const supabase = createClient<Database>(
  VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY
);

// export type MemoItem = Database['public']['Tables']['memo-list']['Row'];

// 단축된 방법 (별도 제공)
export type MemoItem = Tables<'memo-list'>;

export type MemoItemInsert = TablesInsert<'memo-list'>;

export type MemoItemUpdate = TablesUpdate<'memo-list'>;
