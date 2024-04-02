import { ClientCardDto } from './ClientCardDto';
import { ClientSituationClient } from './ClientSituationClient';

export interface ClientSituation{

clientDto:ClientSituationClient;
cards : ClientCardDto[];

}
