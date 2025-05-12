// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zwsbzpeglrfinopqxjws.supabase.co'   // Replace with your URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3c2J6cGVnbHJmaW5vcHF4andzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2OTMyNTYsImV4cCI6MjA2MjI2OTI1Nn0.xEIOeW1Z6m5Zox71tANYgO68cYrz1YL9jH2yOOhPh5w'         // Replace with your key

 const supabase = createClient(supabaseUrl, supabaseKey)
 export default supabase;
