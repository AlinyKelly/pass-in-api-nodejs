import {
  errorHandler
} from "./chunk-E46C3EP2.mjs";
import {
  checkIn
} from "./chunk-PCW3K2TA.mjs";
import {
  createEvent
} from "./chunk-AO6PISXE.mjs";
import "./chunk-JDIVOAVY.mjs";
import {
  getAttendeeBadge
} from "./chunk-A3Q27ODT.mjs";
import {
  getEventAttendees
} from "./chunk-YL7FGZFA.mjs";
import {
  getEvent
} from "./chunk-OYCBPYCV.mjs";
import {
  registerForEvent
} from "./chunk-RWR5EJ5I.mjs";
import "./chunk-3N6WEW4Y.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in constru\xEDda durante o NLW Unite da Rockeseat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
export {
  app
};
