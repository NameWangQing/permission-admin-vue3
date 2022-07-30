import {post} from './http'

export function login  (data:any = {}) {
  return post('/login', {...data})
}