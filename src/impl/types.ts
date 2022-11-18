import { GoalsApi } from "../../dist/api/goals/types";
import { PlansApi } from "../../dist/api/plans/types";
import { TasksApi } from "../../dist/api/tasks/types";
import { ApiImplementation } from "../../dist/types";
import { GoalServiceImpl } from "./goals";
import { planServiceImpl } from "./plans";
import { TaskServiceImpl } from "./tasks";

export class ServiceImplementation implements ApiImplementation {
    plans: PlansApi = planServiceImpl;
    tasks: TasksApi = TaskServiceImpl;
	goals: GoalsApi = GoalServiceImpl;
}