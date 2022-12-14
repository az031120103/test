/* eslint-disable */

declare namespace API {
  // 全局通过表格查询返回结果
  type ListResult<T = any> = {
    content: T
    total?: number
  }

  // 全局通用表格分页请求参数
  type PageParams<T = any> = {
    size?: number
    page?: number
  } & {
    [P in keyof T]?: T[P]
  }
}
