export type BoardCard = {
  session: string
  when: string
  text: string
  ref: string
}

export type BoardMeta = {
  me: string | null
  fetchedAt: number
  transport: string
  error: string | null
}

declare module 'claude-code' {
  interface PluginState {
    'session-board': {
      cards: Shaped<BoardCard[]>
      meta: Shaped<BoardMeta>
    }
  }
}
