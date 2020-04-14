import { Component, OnInit } from '@angular/core';
import { Bonus } from 'src/app/shared/bonus.model';
import { BonusType } from 'src/app/shared/bonus-type';
import { BonusService } from 'src/app/shared/bonus.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit {
  private bonus: Bonus = new Bonus();
  titulo: string = "Bonificacion";

  listaTipoBonificacion: BonusType[] = [
    {value: 0, viewValue:"Recompensa"},
    {value:1, viewValue:"Castigo"},
  ];

  constructor(private bonusService: BonusService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.cargarBonificacion();
  }

  create(): void {
    this.bonusService.create(this.bonus)
      .subscribe(employee => {
        this.router.navigate(['/bonuses/bonus-list'])
        Swal.fire('Nueva bonificacion', `Bonificacion creada con éxito!`, 'success')
      }
      );
  }

  cargarBonificacion(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.bonusService.getBonus(id).subscribe((bonificacion) => this.bonus = bonificacion);
      }
    })
  }
  update(): void {
    this.bonusService.update(this.bonus)
      .subscribe(
        json => {
          this.router.navigate(['/bonuses/bonus-list']);
          Swal.fire('Bonificacion Actualizada', '', 'success');
        },
        err => {
          console.error(err.error.errors);
        }
      )
  }

}
