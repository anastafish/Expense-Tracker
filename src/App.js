import './App.css';
import { createClient } from '@supabase/supabase-js'
import { useEffect } from 'react';


function App() {

  const supabaseUrl = 'https://vsingcsvbdfvrpgflary.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzaW5nY3N2YmRmdnJwZ2ZsYXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4MzgzMjksImV4cCI6MTk5NDQxNDMyOX0.OUYj-0U89hnMJb2HqxTSYDKaqMyswlrEhN1naXAZ3DQ'
  const supabase = createClient(supabaseUrl, supabaseKey)


  async function getCountries() {

    let { data: expensess, error} = await supabase
    .from('expensess')
    .select('*')
  try{  
  console.log(expensess)
  }
  catch{
    console.log(error)
  }
  


  }

  useEffect(() => {
    getCountries()
  })
  return (
    <>
      <input type="text" />
      <input type="text" />

    </>
  );
}

export default App;
