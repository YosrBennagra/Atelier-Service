import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoice: Invoice | null = null;
  id: string | null = null;
  active: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.active = params['active'];
    });

    if (this.id && this.active) {
      if (this.active === 'true') {
        const invoiceId = parseInt(this.id, 10);
        this.getInvoiceById(invoiceId);
      } else {
        this.invoice = null;
      }
    } else {
      this.router.navigate(['/invoice-management']);
    }
  }

  private getInvoiceById(id: number): void {
    const invoices: Invoice[] = [
      { idFacture: 1, montantFacture: 120, montantRemise: 10, dateFacture: "12/12/2021", active: true },
      { idFacture: 2, montantFacture: 1020, montantRemise: 90, dateFacture: "22/11/2020", active: true },
      { idFacture: 3, montantFacture: 260, montantRemise: 30, dateFacture: "18/10/2020", active: false },
      { idFacture: 4, montantFacture: 450, montantRemise: 40, dateFacture: "14/12/2020", active: true },
    ];
  
    const foundInvoice = invoices.find(invoice => invoice.idFacture === id);
  
    if (foundInvoice) {
      this.invoice = foundInvoice;
    } else {
      this.invoice = null;
    }
  }
  
  goBack(): void {
    this.router.navigate(['/invoice-list']);
  }
}
