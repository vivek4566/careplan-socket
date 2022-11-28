import { Server as HttpServer } from "http";
import { Server, ServerOptions } from "socket.io";
import { ClientEvents, ServerEvents } from "./events";
import goalsHandlers from "../../handlers/goals";
import { ServiceImplementation } from "../types";

export function createApplication(
	httpServer: HttpServer,
	implementation: ServiceImplementation,
	serverOptions: Partial<ServerOptions> = {}
): Server<ClientEvents, ServerEvents> {
	const io = new Server<ClientEvents, ServerEvents>(httpServer, serverOptions);

	const { getAll, create } = goalsHandlers(io, implementation);

	io.on("connection", (socket) => {
		socket.on("goals:getAll", getAll);
		socket.on("goals:create", create);
	});
	return io;
}