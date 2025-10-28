import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useTranslation } from 'react-i18next';

const consultationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "Maximum 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Maximum 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().trim().regex(/^\+?[1-9]\d{7,14}$/, "Invalid phone number format").optional().or(z.literal("")),
  businessType: z.string().trim().max(100, "Maximum 100 characters").optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Maximum 1000 characters"),
  honeypot: z.string().max(0).optional(),
});

export const CTA = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof consultationSchema>>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      businessType: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof consultationSchema>) => {
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('hubspot-contact', {
        body: values
      });

      if (error) throw error;

      toast({
        title: "Request sent successfully!",
        description: "Our team will contact you shortly.",
      });

      form.reset();
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
              <span className="text-secondary font-semibold">{t('cta.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('cta.description')}
            </p>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8 bg-muted">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/placeholder.svg"
              >
                <source src="/videos/consultation-intro.mp4" type="video/mp4" />
                <p className="flex items-center justify-center h-full text-muted-foreground">
                  Your browser does not support the video tag. Please upload a video to /public/videos/consultation-intro.mp4
                </p>
              </video>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('cta.callUs')}</div>
                  <div className="font-semibold">+973 XXXX XXXX</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('cta.emailUs')}</div>
                  <div className="font-semibold">info@bahrainsetup.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t('cta.office')}</div>
                  <div className="font-semibold">{t('cta.officeLocation')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-xl border-2">
            <h3 className="text-2xl font-bold mb-6">{t('cta.consultationTitle')}</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('cta.firstName')}</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('cta.lastName')}</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('cta.email')}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('cta.phone')}</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+973 XXXX XXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('cta.businessType')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('cta.businessTypePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('cta.message')}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t('cta.messagePlaceholder')} rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Honeypot field - hidden from users, catches bots */}
                <FormField
                  control={form.control}
                  name="honeypot"
                  render={({ field }) => (
                    <div className="hidden">
                      <Input {...field} tabIndex={-1} autoComplete="off" />
                    </div>
                  )}
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-primary hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('cta.submitting') : t('cta.submitRequest')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  {t('cta.responseTime')}
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
