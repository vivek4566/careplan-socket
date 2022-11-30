import { Server as HttpServer } from "http";
import { Server, ServerOptions } from "socket.io";
import { ClientEvents, ServerEvents } from "./events";
import careplanHandlers from "../src/handlers/careplan";
import { ServiceImplementation } from "../src/impl/types";

export function createApplication(
	httpServer: HttpServer,
	implementation: ServiceImplementation,
	serverOptions: Partial<ServerOptions> = {}
): Server<ClientEvents, ServerEvents> {
	const io = new Server<ClientEvents, ServerEvents>(httpServer, serverOptions);

	const { goalgetAll, goalcreate,plangetAll,plancreate,taskgetAll,taskcreate } = careplanHandlers(io, implementation);

	io.on("connection", (socket) => {
		socket.on("goals:getAll", goalgetAll);
		socket.on("goals:create", goalcreate);
        socket.on("plans:getAll", plangetAll);
		socket.on("plans:create", plancreate);
        socket.on("Tasks:getAll", taskgetAll);
		socket.on("Tasks:create", taskcreate);
	});
	return io;
}
//------


