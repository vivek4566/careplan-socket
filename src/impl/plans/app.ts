import { Server as HttpServer } from "http";
import { Server, ServerOptions } from "socket.io";
import { ClientEvents, ServerEvents } from "./events";
import todoHandlers from "../../handlers/plans";
import { ServiceImplementation } from "../types";

export function createApplication(
	httpServer: HttpServer,
	implementation: ServiceImplementation,
	serverOptions: Partial<ServerOptions> = {}
): Server<ClientEvents, ServerEvents> {
	const io = new Server<ClientEvents, ServerEvents>(httpServer, serverOptions);

	const { getAll, create } = todoHandlers(io, implementation);

	io.on("connection", (socket) => {
		socket.on("plans:getAll", getAll);
		socket.on("plans:create", create);
	});
	return io;
}