export class Subscription {
  plan_name: string;
  status: string;
  subscription_ends_at: string;
  trial_ends_at: string;

  constructor(data: any) {
    if (data == null) return;

    this.plan_name = data.plan_name;
    this.status = data.status;
    this.subscription_ends_at = data.subscription_ends_at;
    this.trial_ends_at = data.trial_ends_at;
  }
}
