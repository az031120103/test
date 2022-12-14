// / <reference types="vite/client" />

import type {
  ComponentRenderProxy,
  VNode,
  SetupContext,
  EmitsOptions
} from 'vue'

declare global {
  declare type Recordable<T = any> = Record<string, T>
  declare type Indexable<T = any> = {
    [key: string]: T
  }
  declare interface Fn<T = any, R = T> {
    (...arg: T[]): R
  }
  declare type EmitFn<E = EmitsOptions> = SetupContext<E>['emit']
  declare interface PromiseFn<T = any, R = T> {
    (...arg: T[]): Promise<R>
  }
  // 将联合类型转为交叉类型
  declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never
  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode
    // tslint:disable no-empty-interface
    type ElementClass = ComponentRenderProxy
    interface ElementAttributesProperty {
      $props: any
    }
    interface IntrinsicElements {
      [elem: string]: any
    }
    interface IntrinsicAttributes {
      [elem: string]: any
    }
  }
}

declare module 'vue' {
  interface HTMLAttributes {
    vHtml?: any
    vShow?: any
    vSlots?: any
  }
  export type JSXComponent<Props = any> =
    | {new (): ComponentPublicInstance<Props>}
    | FunctionalComponent<Props>
}
