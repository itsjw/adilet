from rest_framework import routers
from api.views import ClinicViewSet, EducationViewSet, HelpViewSet

router = routers.DefaultRouter()
router.register(r'clinic', ClinicViewSet, base_name='clinic')
router.register(r'education', EducationViewSet, base_name='education')
router.register(r'help', HelpViewSet, base_name='help')

urlpatterns = router.urls
