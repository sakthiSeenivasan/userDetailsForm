import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userDetailsForm';
  myForm!: FormGroup;
  constructor(private router:Router) { }

 ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {
      const birthday = new Date(control.value);
      const today = new Date();
      const age = today.getFullYear() - birthday.getFullYear();
  
      if (age < 18) {
        return { 'invalidAge': true };
      }
    }
    return null;
  }
  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
      dob: new FormControl('', [Validators.required, this.ageValidator]),
      email: new FormControl(''),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      proofType: new FormControl('', [Validators.required]),
      idNumber: new FormControl ('', [Validators.required, Validators.pattern('[A-Za-z0-9_\\-][A-Za-z0-9_\\-]*')]),
      addr1: new FormControl ('', [Validators.required]),
      addr2: new FormControl(''),
      addr3: new FormControl(''),
      landmark: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      nominee: new FormControl('', [Validators.required]), 
  });
  }

  onSubmit() {
    if (this.myForm.controls.nominee.value === 'yes' ) {
      // Handle form submission logic here
      console.log('ssss')
      this.router.navigateByUrl('user-details');
    }
    
  }

}
