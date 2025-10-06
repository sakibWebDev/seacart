import { serve } from "inngest/next";
import { inngestClient } from "@/inngest/client.js";
import {
  syncUserCreation,
  syncUserUpdation,
  syncUserDeletion,
} from "@/inngest/functions/userFunctions.js";

export const { GET, POST } = serve({
  client: inngestClient,
  functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
});
