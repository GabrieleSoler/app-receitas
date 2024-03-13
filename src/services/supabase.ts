import "react-native-url-polyfill/auto"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://rlkjtazyzkuczlkcptza.supabase.co" ?? ""
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsa2p0YXp5emt1Y3psa2NwdHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NzEwOTMsImV4cCI6MjAyNTI0NzA5M30.KSxET7vMhEBxvOOydb5mF_tP6MkT2ItvORVwuHEiTRA" ?? ""

export const supabase = createClient(supabaseUrl, supabaseKey)