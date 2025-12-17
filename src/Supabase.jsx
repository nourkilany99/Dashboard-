import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jxpyfqjhpqmmtbxicnyr.supabase.co'
const supabaseKey = 'sb_publishable_99tZ6OBArn8ZRn7I1dgZLQ_J-md9Oay'
export const supabase = createClient(supabaseUrl, supabaseKey)