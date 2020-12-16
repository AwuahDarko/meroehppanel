import * as moment_ from 'moment';
const moment = moment_;
export class Subscription {
  plan_name: string;
  status: string;
  subscription_ends_at: string;
  trial_ends_at: string;

  constructor(data: any) {
    if (data == null) return;

    this.plan_name = data.plan_name;
    if (data.plan_name == null) {
      this.plan_name = 'Trial';
    }
    this.status = data.status;
    this.subscription_ends_at = data.subscription_ends_at;
    if (data.trial_ends_at != null) {
      this.trial_ends_at = moment(
        data.trial_ends_at,
        'YYYY-MM-DD HH:mm:ss'
      ).format('LL, HH:mm');
    }
  }
}
