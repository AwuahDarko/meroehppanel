import { Subscription } from './subscription-data';
import * as moment_ from 'moment';
const moment = moment_;
export class TenantInformation {
  admin_name: string;
  date_of_creation: string;
  sms_balance: number;
  subscription_data: Subscription;
  tenant_logo: string;
  tenant_name: string;
  tenant_email: string;
  number_of_users: number;
  tenant_active: boolean;

  constructor(tenant_data: any) {
    if (tenant_data == null) return;

    this.admin_name = tenant_data.Admin_name.fullname;
    if (tenant_data.date_of_creation != null) {
      this.date_of_creation = moment(
        tenant_data.date_of_creation,
        'YYYY-MM-DD HH:mm:ss'
      ).format('LL, HH:mm');
    }

    this.sms_balance = tenant_data.sms_balance;
    this.tenant_email = tenant_data.tenant_email;
    this.tenant_name = tenant_data.tenant_name;
    this.tenant_logo = tenant_data.tenant_logo;
    this.subscription_data = new Subscription(tenant_data.subscription_data);
    this.number_of_users = tenant_data.number_of_users;
    this.tenant_active =
      tenant_data.tenant_status == 'Suspended' ? false : true;
  }
}
