import loadHttp from "@/uilts/loadHttp"
export const getHomeNavSvgAPI=(path)=>{
  return loadHttp(
    {
      url:path,
    }
  )
}