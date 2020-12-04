export class TenantSummary {
  tenants_on_subscription: number = 0;
  tenants_subscription_cancelled: number = 0;
  number_of_tenants: number = 0;
  tenants_on_free_trial: number = 0;

  constructor() {}

  setTenantSummary(summary: any) {
    if (summary == null || undefined) return;

    this.tenants_on_subscription = summary.TenantsOnSubscription;
    this.tenants_subscription_cancelled = summary.TenantsSubscriptionCancelled;
    this.number_of_tenants = summary.numberOfTenants;
    this.tenants_on_free_trial = summary.tenantsOnFreeTrial;
  }
}
