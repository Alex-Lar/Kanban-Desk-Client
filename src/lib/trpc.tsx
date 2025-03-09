import type { TrpcRouter } from '@kanban-desk/backend/src/trpc'
import { createTRPCReact } from '@trpc/react-query'

const trpc = createTRPCReact<TrpcRouter>()
