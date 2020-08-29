import {instance1} from './request';

export function getHomeMultidata () {
  return instance1({
    url: '/home/multidata'
  })
}
export function getGoods (type, page) {
  return new Promise(resolve => {
    if (page === 1) {
      resolve([
        {id: 1, src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937588607,58419109&fm=26&gp=0.jpg", title: type + "文字是人类用表意符号记录表达信息以传之久远的方式和工具。"},
        {id: 2, src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937588607,58419109&fm=26&gp=0.jpg", title: type + "文字是人类用表意符号记录表达信息以传之久远的方式和工具。"},
        {id: 3, src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937588607,58419109&fm=26&gp=0.jpg", title: type + "文字是人类用表意符号记录表达信息以传之久远的方式和工具。"},
        {id: 4, src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937588607,58419109&fm=26&gp=0.jpg", title: type + "文字是人类用表意符号记录表达信息以传之久远的方式和工具。"},
        {id: 5, src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937588607,58419109&fm=26&gp=0.jpg", title: type + "文字是人类用表意符号记录表达信息以传之久远的方式和工具。"},
        {id: 6, src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937588607,58419109&fm=26&gp=0.jpg", title: type + "文字是人类用表意符号记录表达信息以传之久远的方式和工具。"},
        {id: 7, src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937588607,58419109&fm=26&gp=0.jpg", title: type + "文字是人类用表意符号记录表达信息以传之久远的方式和工具。"},
        {id: 8, src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937588607,58419109&fm=26&gp=0.jpg", title: type + "文字是人类用表意符号记录表达信息以传之久远的方式和工具。"},
        {id: 9, src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937588607,58419109&fm=26&gp=0.jpg", title: type + "文字是人类用表意符号记录表达信息以传之久远的方式和工具。"},
        {id: 10, src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937588607,58419109&fm=26&gp=0.jpg", title: type + "文字是人类用表意符号记录表达信息以传之久远的方式和工具。"},
        {id: 11, src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937588607,58419109&fm=26&gp=0.jpg", title: type + "文字是人类用表意符号记录表达信息以传之久远的方式和工具。"}
      ])
    } else {
      resolve();
    }
  }) 
}