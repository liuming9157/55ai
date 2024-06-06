import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const { keyword } = getQuery(event)
  let tools=[]
  if(keyword){
    const { data } = await client.from('tools').select('*').textSearch('title',keyword)
    tools=data

  }else{
    const { data } = await client.from('tools').select('*').order('created_at', { ascending: false })
    tools=data
  }


  return tools
})
