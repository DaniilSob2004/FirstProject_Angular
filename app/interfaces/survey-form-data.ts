import { Group } from '../interfaces/group'
import { Subject } from '../interfaces/subject';

export interface SurveyFormData {
    surname: string,
    name: string,
    group: Group,
    subject: Subject,
    gender: string,
    agree: boolean
}
