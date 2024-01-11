import { ok, serverError } from '../helpers';
import { HttpRequest, HttpResponse, IController } from '../protocols';
import { FindAllVehiclesService } from '@/src/domain/services/vehicle/find-all-vehicles-service';

export class FindAllVehiclesController implements IController {
  constructor(
    private readonly findAllVehiclesService: FindAllVehiclesService
  ) {}

  async handle(
    httpRequest: HttpRequest<unknown>
  ): Promise<HttpResponse<string>> {
    try {
      const vehicles = await this.findAllVehiclesService.execute();

      return ok(vehicles);
    } catch (err) {
      return serverError();
    }
  }
}
