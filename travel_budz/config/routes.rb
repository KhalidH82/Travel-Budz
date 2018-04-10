Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'api/trips', to: 'trips#index'
  #resources :trips, path: "api/trips" 
end
