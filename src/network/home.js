import {instance1} from './request';

export function getHomeMultidata () {
  return instance1({
    url: '/home/multidata'
  })
}