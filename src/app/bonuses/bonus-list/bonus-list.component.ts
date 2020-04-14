import { Component, OnInit } from '@angular/core';
import { Bonus } from 'src/app/shared/bonus.model';
import { BonusService } from 'src/app/shared/bonus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bonus-list',
  templateUrl: './bonus-list.component.html',
  styleUrls: ['./bonus-list.component.css']
})
export class BonusListComponent implements OnInit {

  bonuses: Bonus[];
  constructor(private bonusService: BonusService) { }

  ngOnInit() {
    this.bonusService.getBonuses().subscribe(
      bonuses => this.bonuses = bonuses
    );
  }

  delete(bonus: Bonus): void {
    Swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la bonificacion?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result) => {
      if (result.value) {

        this.bonusService.delete(bonus.idBonificacion).subscribe(
          () => {
            this.bonuses = this.bonuses.filter(emp => emp !== bonus)
            Swal.fire(
              'Bonificacion Eliminada!',
              `Bonificacion ${bonus.nombreBonificacion} eliminada con éxito.`,
              'success'
            )
          }
        )

      }
    });
  }

}
